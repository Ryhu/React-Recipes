
var MenuItem = React.createClass({
   getInitialState(){
      return {menuFocus: false}
   },

   edit(){
      alert("hihi");
   },

   render() {
      return <div className="card item mx-auto">
         <p className="food" data-toggle="collapse" href={"#num" + this.props.id}>  {this.props.children}  </p>
         <div id={"num" + this.props.id} className="collapse">
            <p className="ingr">Ingredients</p>
            <div className="ingrList">
               <h1>{this.id}</h1>
            </div>
            <h1>this is my thing</h1>
            <button id="deleteButton" className="btn btn-primary">delete</button>
            <button id="editButton" className="btn btn-primary" onClick={this.edit}>edit</button>

         </div>
      </div>
   }
})

var Menu = React.createClass({

   getInitialState(){
      return {menuItems: []}
   },

   //for additem
   generateKey(){
      this.genId = this.genId || 0;
      return this.genId++
   },

   addItem(food){
      var items = [
         ...this.state.menuItems,
         {
            id: this.generateKey(),
            name: food
         }
      ]
      this.setState({menuItems: items})
   },

   removeItem(){

   },

   //for render
   eachItem(item){
      return (<MenuItem key = {item.id}
                    id = {item.id}>
              {item.name}
              </MenuItem>)
   },

   render(){
      return (<div className="menu">
         {this.state.menuItems.map(this.eachItem)}
         <button onClick={() => this.addItem('Note')}>+++</button>
      </div>)


   }

})

var Moddy = React.createClass({
  getInitialState(){
     return {open:false}
  },


  render(){
    return (
      <div>
      <button data-toggle="modal" data-target="exampleMoal">thing here</button>
      <div className="modal" id="exampleMoal"> </div>
    </div>)
  }
})


ReactDOM.render(
  <div>
    <Moddy />

  </div>, document.getElementById("mod-container")
)




ReactDOM.render(
   <div>

      <Menu />
   </div>, document.getElementById("react-container")
)

ReactDOM.render(
  <div>
    <MenuItem text="stupy">
      its working
    </MenuItem>
    <MenuItem text="hajkhfaskljhflkj"> it workaz</MenuItem>
  </div>, document.getElementById("stupydiv")
)
