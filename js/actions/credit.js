class Credit extends Monogatari.Action {
    static matchObject ( statement ) {
        return typeof statement.Credit !== 'undefined';
    }
    
    constructor ( statement ) {
        super();
        
        this.statement = statement.Credit;
        this.fade_interval = 1400; // in ms
        this.scroll_speed = 1400; // in ms, per 100 pixels
        this.quote_interval = 5000;
    }
    
    apply () {
        this.engine.settings().isFinished = true;
        this.engine.global( 'block', true );
        this.engine.element().find('[data-component="text-box"]').hide();

        this.container = document.createElement( 'credits-container' );
        this.wrapper = document.createElement( 'div' );
        this.container.className = 'animated fadeIn';
        this.wrapper.className = 'wrapper';
        this.container.append( this.wrapper );
        
        this.engine.element().append( this.container );
        
        return new Promise( resolve => {
            this.runCredit().then( () => {
                this.engine.global( 'block', false );
                this.container.classList.remove( 'fadeIn' );
                this.container.classList.add( 'fadeOut' );
                
                this.container.addEventListener( 'animationend', () => {
                    this.container.remove();
                    resolve( { advance: true } );
                } );
            });
        } );
    }
    
    didApply () {
        return Promise.resolve( { advance: true } );
    }
    
    runCredit () {
        if ( 'fade' in this.statement && 'scroll' in this.statement && 'quote' in this.statement ) {
            return new Promise( resolve => {
                this.fadeStart( this.statement.fade ).then( () => {
                    this.scrollStart( this.statement.scroll ).then( () => {
                        this.fadeQuoteStart( this.statement.quote ).then( () => {
                            resolve();
                        } );                        
                    } );
                });
            } );
        }
        else if ( 'fade' in this.statement ) {
            return this.fadeStart( this.statement.fade );
        }
        else if ( 'scroll' in this.statement ) {
            return this.scrollStart( this.statement.scroll );
        }
        else if ( 'quote' in this.statement ) {
            return this.fadeQuoteStart( this.statement.fade );
        }
        return Promise.resolve();
    }

    fadeQuoteStart ( contents ){
        this.container.classList.remove( 'credit-scroll' );
        this.container.classList.add( 'credit-fade' );
        // console.log(contents);

        return new Promise ( resolve => {
            this.fadeQuote ( contents.content, contents.source, resolve );
        } );
    }

    fadeQuote ( content, actor, resolve ) {
        this.fadeQuoteContent( content, actor ).then( () => {
            resolve();
            return;
        } );
    }

    fadeQuoteContent ( content, actor ) {
        this.wrapper.innerHTML = '';
        this.wrapper.style.removeProperty( 'transition' );
        this.wrapper.style.removeProperty( 'transform' );
        let element = this.createElementQuote( content, actor );
        element.classList.add( 'animated', 'fadeIn' );
        
        this.wrapper.append( element );
        
        return new Promise( resolve => {
            setTimeout( () => {
                element.classList.remove( 'fadeIn' );
                element.classList.add( 'fadeOut' );
                element.addEventListener( 'animationend', () => {
                    element.remove();
                    resolve(); 
                } );
            }, this.quote_interval );
        } );
    }
    
    fadeStart ( contents ) {
        this.container.classList.remove( 'credit-scroll' );
        this.container.classList.add( 'credit-fade' );
        
        return new Promise( resolve => {
            this.fade( contents, 0, resolve );
        } );
    }
    
    fade ( contents, i, resolve ) {
        if ( ! ( i in contents ) ) {
            resolve();
            return;
        }
        
        const content = contents[i];
        if ( 'content' in content ) {
            this.fadeContent( content.title, content.content, ( 'class' in content ? content.class : '' ) ).then( () => {
                this.fade( contents, i + 1, resolve );
            } );
        }
        else if ( 'list' in content ) {
            this.fadeList( content.title, content.list, ( 'class' in content ? content.class : '' ) ).then( () => {
                this.fade( contents, i + 1, resolve );
            } );
        }
        else if ( 'quote' in this.statement ) {
            this.fadeContent( content.content, content.source ).then( () => {
                this.fade( contents, i + 1, resolve );
            } );
        }
    }
    
    fadeContent ( title, content, classnames = '' ) {
        let element = this.createElementContent( title, content, classnames );
        element.classList.add( 'animated', 'fadeIn' );
        
        this.wrapper.append( element );
        
        return new Promise( resolve => {
            setTimeout( () => {
                element.classList.remove( 'fadeIn' );
                element.classList.add( 'fadeOut' );
                element.addEventListener( 'animationend', () => {
                    element.remove();
                    resolve(); 
                } );
            }, this.fade_interval );
        } );
    }
    
    fadeList ( title, list, classnames = '' ) {
        let element = this.createElementList( title, false, list, classnames );
        element.classList.add( 'animated', 'fadeIn' );
        
        this.wrapper.append( element );
        
        return new Promise( resolve => {
            setTimeout( () => {
                element.classList.remove( 'fadeIn' );
                element.classList.add( 'fadeOut' );
                element.addEventListener( 'animationend', () => {
                    element.remove();
                    resolve();
                } );
            }, this.fade_interval );
        } );
    }
    
    scrollStart ( contents ) {
        this.container.classList.remove( 'credit-fade' );
        this.container.classList.add( 'credit-scroll' );
        
        return new Promise( resolve => {
            this.scroll( contents, resolve );
        } );
    }
    
    scroll ( contents, resolve ) {
        for ( const i in contents ) {
            const content = contents[i];
            
            if ( 'content' in content ) {
                let element = this.createElementContent( content.title, content.content, ( 'class' in content ? content.class : '' ) );
                this.wrapper.append( element );
            }
            else if ( 'list' in content ) {
                let element = this.createElementList( content.title, ( 'subtitle' in content ? content.subtitle : false ), content.list, ( 'class' in content ? content.class : '' ) );
                this.wrapper.append( element );
            }
        }
        
        let duration = Math.round( this.wrapper.clientHeight / 100 * this.scroll_speed );
        let end_position = Math.round( this.wrapper.clientHeight + window.innerHeight ) + 100;
        
        this.wrapper.style.setProperty( 'transition', 'transform ' + duration + 'ms linear' );
        this.wrapper.style.setProperty( 'transform', 'translateY(-' + end_position + 'px)' );
        
        this.wrapper.addEventListener( 'transitionend', () => {
            resolve();
        } );
    }
    
    createImageElement ( asset ) {
        let image = false;
        if ( asset.match(/^[A-Za-z0-9_-]+$/) ) {
            image = this.engine.asset( 'images', asset );
        }
        if ( image ) {
            let img_element = document.createElement( 'img' );
            let path = this.engine.setting( 'AssetsPath' );
            img_element.src = path.root + '/' + path.images + '/' + image;
            return img_element;
        }
        return false;
    }
    
    createContentElement ( content ) {
        let img_element = this.createImageElement( content );
        if ( false !== img_element ) return img_element;
        
        let p_element = document.createElement( 'p' );
        p_element.textContent = content;
        return p_element;
    }
    
    createElementContent ( title, content, classnames = '' ) {
        let content_arr = Array.isArray( content ) ? content : [ content ];
        let element = document.createElement( 'div' );

        element.className = 'credit-section' + ( classnames ? ' ' + classnames : '' );
        
        let title_element = document.createElement( 'h1' );
        let content_element = document.createElement( 'div' );
        title_element.textContent = title;

        for ( const i in content_arr ) {
            let each_content_element = this.createContentElement( content_arr[i] );
            content_element.append( each_content_element );
        }

        element.append( title_element );
        element.append( content_element );
        return element;    
    }

    createElementQuote ( quote, source ) {
        let element = document.createElement( 'div' );
        element.className = 'credit-section';
        let quote_element = document.createElement( 'p' );
        let source_element = document.createElement( 'p' );
        quote_element.textContent = quote;        
        source_element.textContent = source;
        source_element.id = "source";
        element.append( quote_element );
        element.append( source_element );
        return element;
    }
    
    createElementList ( title, subtitle, lists, classnames = '' ) {
        let element = document.createElement( 'div' );
        let title_element = document.createElement( 'h1' );

        element.className = 'credit-section' + ( classnames ? ' ' + classnames : '' );
        title_element.textContent = title;
        element.append( title_element );

        let subtitle_element;
        if ( subtitle ) {
            subtitle_element = document.createElement( 'h3' );
            subtitle_element.textContent = subtitle;
            element.append( subtitle_element );
        }
        
        if ( ! Array.isArray( lists ) || typeof lists[0] == 'string' ) {
            lists = [ lists ];
        }

        for ( const s in lists ) {
            let list = lists[s];
            let list_element = document.createElement( 'dl' );
            let is_array = Array.isArray( list );
            
            for ( const i in list ) {
                if ( ! is_array ) {
                    let dt_element = document.createElement( 'dt' );
                    dt_element.textContent = i;
                    list_element.append( dt_element );
                }
                let dd_element = document.createElement( 'dd' );
                if ( Array.isArray(list[i]) ) {
                    for ( const l in list[i] ) {
                        let each_content_element = this.createContentElement( list[i][l] );
                        dd_element.append( each_content_element );
                    }
                }
                else {
                    let img_element = this.createImageElement( list[i] );
                    if ( img_element ) {
                        dd_element.append( img_element );
                    }
                    else {
                        dd_element.textContent = list[i];
                    }
                }
                list_element.append( dd_element );
            }
            element.append( list_element );
        }
        
        return element;
    }
    
    revert () {
        return Promise.resolve();
    }
}