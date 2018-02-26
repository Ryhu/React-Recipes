
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
      return {menuItems: [
                  {
                     id: this.generateKey(),
                     name: "hamburgers"
                  },
                  {
                     id: this.generateKey(),
                     name: "pizza"
                  },

                         ]}
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
      {console.log(this.state)}
         {this.state.menuItems.map(this.eachItem)}
         <button onClick={() => this.addItem('Note')}>+++</button>
         <Moddy onSubmit={this.addItem}/>
      </div>)


   }

})

var Moddy = React.createClass({
  getInitialState(){
     return {open:false}
  },

  submit(){
     this.props.onSubmit(this.refs.recipeName.value);
  },


   render(){
      return (
         <div>
            <button data-toggle="modal" data-target="#myModal"> thing here </button>
            <div className="modal fade" id="myModal">
               <div className="modal-dialog">
                  <div className="modal-content">
                     <div className="modal-header">
                        <div className="modal-title">Create a New Recipe!</div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        Recipe Name:
                        <input ref="recipeName">

                        </input>
                        <br />
                        Recipe Stuffs:
                        <input ref="recipeStuffs">

                        </input>
                        <br />
                        <button onClick={this.submit}>submit</button>
                     </div>
                  </div>

               </div>



            </div>
         </div>
      )
   }


})






ReactDOM.render(
   <div>

      <Menu />
   </div>, document.getElementById("react-container")
)

/*ReactDOM.render(
  <div>
    <MenuItem text="stupy">
      its working
    </MenuItem>
    <MenuItem text="hajkhfaskljhflkj"> it workaz</MenuItem>
  </div>, document.getElementById("stupydiv")
)
*/
