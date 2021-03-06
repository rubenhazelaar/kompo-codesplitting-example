import component, {router} from 'kompo';
const {construct,getRouter, react} = component;
const {swap} = router;

export default construct('div', function ({heading}) {
    this.setAttribute('data-type', 'Branch');
    
    // Create Elements
    const h2 = document.createElement('h2');
    h2.textContent = heading;

    // Append children
    this.appendChild(h2);

    const r = getRouter(this);
    react(this, () => {
        console.log("LEVEL TWO SWAP");
        swap(this, r);
    });
}, {
    heading: 'Branch construct'
});
