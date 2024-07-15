<template>
    <div class="container">
        <h1>Productos disponibles</h1>
        
        <hr />

        <!-- Lista de productos -->
        <div v-for="product in products" :key="product.id" class="product-item">
            <div class="product-content">
                <img :src="`src/assets/img/producto-${product.id}.png`" alt="Imagen del producto" />
                <div class="product-info">
                    <span>{{ product.name }} - Precio $: {{ product.price }}</span>
                </div>
            </div>
            <button @click="addToCart(product)" class="add-to-cart-btn">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                Agregar al carrito
            </button>
        </div>
        
        <hr />

        <h2>Productos en el carrito</h2>

        <!-- Lista de productos en el carrito -->
        <div v-for="item in cart" :key="item.product.id" class="cart-item">
            <div class="cart-content">
                <img :src="`src/assets/img/producto-${item.product.id}.png`" alt="Imagen del producto" />
                <div class="cart-info">
                    <span>{{ item.product.name }} - Cantidad: {{ item.quantity }}</span>
                </div>
            </div>
            <button @click="removeFromCart(item)" class="remove-from-cart-btn">
                <i class="fa fa-trash" aria-hidden="true"></i>
                Remover del carrito
            </button>
        </div>

        <hr />
        
        <!-- Total a pagar -->
        <p class="total-label">Total a pagar: ${{ total }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    { id: 1, name: 'Audifono', price: 30000, stock: 3 },
                    { id: 2, name: 'Mouse', price: 20000, stock: 5 },
                    { id: 3, name: 'Teclado', price: 15000, stock: 10 },
                    { id: 4, name: 'Gabinete', price: 35000, stock: 4 },
                    { id: 5, name: 'Pantalla', price: 175000, stock: 3 },
                    { id: 6, name: 'Silla', price: 150000, stock: 2 }
                ],
                cart: []
            };
        },
        computed: {
            total() {
                return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
            }
        },
        methods: {
            addToCart(product) {
                let cartItem = this.cart.find(item => item.product.id === product.id);
                if (cartItem) {
                    if (cartItem.quantity < product.stock) {
                        cartItem.quantity++;
                    } else {
                        alert("No hay más unidades disponibles en stock");
                    }
                } else {
                    this.cart.push({ product: product, quantity: 1 });
                }
            },
            removeFromCart(item) {
                let index = this.cart.indexOf(item);
                if (index !== -1) {
                    if (item.quantity > 1) {
                        item.quantity--;
                    } else {
                        this.cart.splice(index, 1);
                    }
                }
            }
        }
    };
</script>

<style scoped>
    .container {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    h1, h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    
    .product-item,
    .cart-item {
        display: flex;
        flex-direction: column; 
        align-items: center; 
        margin-bottom: 20px;
    }
    
    .product-content,
    .cart-content {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    .product-info,
    .cart-info {
        text-align: left; 
    }

    .add-to-cart-btn,
    .remove-from-cart-btn {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%; 
        max-width: 200px; 
    }

    .add-to-cart-btn i,
    .remove-from-cart-btn i {
        margin-right: 10px;
    }

    .total-label {
        font-weight: bold;
        font-size: 20px;
        margin-top: 20px;
    }
</style>

