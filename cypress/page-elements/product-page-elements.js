///<reference types= "cypress"/>

export default class ProductPageElements{
    sendToAFriendBtn = '#send_friend_button'
    friendsNameInput = '#friend_name'
    friendsEmailInput = '#friend_email'
    sendBtn = '#sendEmail'
    modalOkBtn = '[value=OK]'
    sizes = '#group_1'
    addToCartBtn = '#add_to_cart>button'
    modalText = '#send_friend_form>.page-subheading'
    modal = 'fancybox-skin'

    getSendToAFriendBtn(){
        return this.sendToAFriendBtn
    }
    getFriendsNameInput(){
        return this.friendsNameInput
    }
    getFriendsEmailInut(){
        return this.friendsEmailInput
    }
    getSendBtn(){
        return this.sendBtn
    }
    getModalOkBtn(){
        return this.modalOkBtn
    }
    getSizes(){
        return this.sizes
    }
    getColors(color){
        return `#color_to_pick_list [title=${color}]`
    }
    getAddToCartBtn(){
        return this.addToCartBtn
    }
    getModalText(){
        return this.modalText
    }
    getModal(){
        return this.modal
    }
}