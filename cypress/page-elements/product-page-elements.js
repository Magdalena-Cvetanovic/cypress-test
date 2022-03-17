///<reference types= "cypress"/>

export default class ProductPageElements{
    sendToAFriendBtn = '#send_friend_button'
    friendsNameInput = '#friend_name'
    friendsEmailInput = '#friend_email'
    sendBtn = '#sendEmail'
    modalOkBtn = '[value=OK]'
    sizes = '#group_1'
    // colors = `#color_to_pick_list [title=${color}]`
    addToCartBtn = '#add_to_cart>button'
   modalText = '.fancybox-inner > h2'
   modal = '.fancybox-skin'

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
    getColors(){
        return this.colors
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