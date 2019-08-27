class ProjectList extends React.Component {

    render() {
      return(
        <div class = "list-container">
          <ul class = "list_item">
            {
              Object.keys(this.props.currentRow).map( (k) => {
                return <li>  {k} --> {this.props.currentRow[k]} </li>
              } )
            }
            
          </ul>
  
        </div>
  
      );
    }
  }

  export default ProjectList;