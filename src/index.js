module.exports = function check(str, bracketsConfig) {

    function MakeHumanBrackets( srcBracketsConfig ){
        return srcBracketsConfig.map( ( configArray ) => {
            return configArray.join( '' );
        } );
    }

    function ReduceBrackets( strSource, humanBracketsCfg ){
        let strResult = strSource;

        for( curBracketsIndex = 0; curBracketsIndex < humanBracketsCfg.length; curBracketsIndex++  ){
            let currentBrackets = humanBracketsCfg[ curBracketsIndex ];
            for( let charIndex = 0; charIndex < strResult.length;  ){

                if( strResult.indexOf( currentBrackets ) > -1 ){

                    strResult = strResult.replace( currentBrackets, '' );
                    charIndex = -1;
                    curBracketsIndex = -1;

                } else {

                    charIndex = strResult.length;

                }

            }

        }

        return strResult;
    }


    let humanBracketsConfig = MakeHumanBrackets( bracketsConfig );
    let strCleared = ReduceBrackets( str, humanBracketsConfig );

    return( !strCleared.length );


  // your solution
}
