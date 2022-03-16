export default class HomePageElements{
    searchBar = '#search_query_top'
    dressesLink = '.sf-menu > :nth-child(2)> a'

    getSearchBar(){
        return this.searchBar
    }
    getDressesLink(){
        return this.dressesLink
    }
    
}