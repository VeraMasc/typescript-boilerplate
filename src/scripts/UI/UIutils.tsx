import * as React from 'react';
import { ReactTyped, Typed } from 'react-typed';
import { EventLog } from './eventLog';

/**Catches react errors */
export class CatchError extends React.Component {
    declare state:{ hasError?:boolean}
    declare props:Readonly<{fallback?, children?}>

    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return this.props.fallback ?? <p><b>Error with no fallback!</b></p>;
      }
  
      return this.props.children;
    }
}

/**Removes all control charactes from the {@link EventLog} text*/
export function escapeLogStrings(text:string|null){
    if(text==null)
        return null
    return text.replaceAll(/\^(?:(\^)|\d+)/g,"$1")
}

/**Exposes some private properties of {@link Typed} to alow for some special interactions 
 * @remarks I hate having to do this, but the author made the module very inflexible and impossible to extend normally.
*/
export type ExposedTyped = {
    [Property in keyof ExposerTyped]: ExposerTyped[Property];
    
}&{
    [Property in keyof Typed]: Typed[Property];
}

/**Props to expose in {@link Typed} to make it {@link ExposedTyped} */
type ExposerTyped = {
    strings:string[],
    typingComplete:boolean,
    replaceText:(str:string)=>void;
    el:HTMLElement
}

/**Zero width space. Used for text formatting and stuff */
export var zeroWidth="​"

