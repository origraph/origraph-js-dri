class DeriveReduceInterface {
    constructor (classObj) {
        this.classObj = classObj;
        this.cancel = true;
    }
    content (element) {
        // Object.keys(this.classObj.table.getAttributeDetails())
        // this.classObj.getConnectedClasses()
        element.append('svg')
        // element.text('custom plugin on its way');
    }
    ok () {
        console.log('clicked ok');
    }
}
export default DeriveReduceInterface;