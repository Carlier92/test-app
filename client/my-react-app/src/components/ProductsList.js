import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchAllProducts } from '../actions/products'
import {createProduct} from '../actions/products'
import ProductForm from './ProductForm'
import {Link} from 'react-router-dom'


class ProductsList extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  createProduct = (product) => {
    this.props.createProduct(product)
  }

  render() {
    const {products} = this.props
    return (
      <div>
        <h1>All products</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (<tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={ `/products/${product.id}` }>{product.name}</Link>
              </td>
              <td>&euro; {product.price}.00</td>
            </tr>)) }
          </tbody>
		</table>

        <h1>Create a new product</h1>

        <ProductForm onSubmit={this.createProduct} />
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { fetchAllProducts, createProduct }) (ProductsList)
