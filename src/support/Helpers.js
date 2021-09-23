const Helpers = {
    dmp(text) {
        // eslint-disable-next-line
        console.log(text);
    },

    ucwords(str) {
        return str.replace(/-/g, ' ').replace(/_/g, ' ').replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,function(s) {
            return s.toUpperCase();
        });
    },

    handleEmpty(items) {
        if ( items === false ) {
            return false;
        }

        if ( items === null ) {
            return null;
        }

        if ( Array.isArray(items) && !items.length ) {
            return [];
        }

        if ( !Array.isArray(items) && !Object.keys(items).length ) {
            return {};
        }

        return true;
    },

    moveElement(array, from, to) {
        const copy = [...array];
        const valueToMove = copy.splice(from, 1)[0];
        copy.splice(to, 0, valueToMove);

        return copy;
    },
}

export default Helpers;
