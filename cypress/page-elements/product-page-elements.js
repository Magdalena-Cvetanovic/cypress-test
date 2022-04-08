///<reference types= "cypress"/>

export default class ProductPageElements{
    productName = '[itemprop="name"]'
    productPrice = '#our_price_display'
    sendToAFriendBtn = '#send_friend_button'
    friendsNameInput = '#friend_name'
    friendsEmailInput = '#friend_email'
    sendBtn = '#sendEmail'
    modalOkBtn = '[value=OK]'
    sizes = '#group_1'
    selectedSize = '#uniform-group_1>span'
    addToCartBtn = '#add_to_cart>button'
    modalText = '#send_friend_form>.page-subheading'
    modal = 'fancybox-skin'

    getColors(color){
        return `#color_to_pick_list [title=${color}]`
    }
    
}