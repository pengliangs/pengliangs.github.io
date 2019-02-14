/**
 * @author pengliang on 2018-11-22 17:28
 */

var books = [
    {
        bookName: '人性的弱点',
        buyLink: '#',
        comment: '描述'
    },
    {
        bookName: '思考快与慢',
        buyLink: '#',
        comment: '描述'
    },
    {
        bookName: '解忧杂货店',
        buyLink: '#',
        comment: '描述'
    },
    {
        bookName: '活着',
        buyLink: '#',
        comment: '描述'
    }

]
window.onload = function () {
    window.mv = new Vue({
        el: "#app",
        data: {
            tag: {
                activeTagName: 'all'
            },
            books: books
        },
        methods: {
            activeTagClick: function (index, tagName) {
                this.tag.activeTagName = tagName;
            },
            isActiveTag: function (tagName) {
                return this.tag.activeTagName == tagName;
            },
            filterDoc: function (tags) {
                if (this.tag.activeTagName == "all") {
                    return true;
                }
                if (tags) {
                    var tagList = tags.split(',');
                    var tagSize = tagList.length;
                    for (var i = 0; i < tagSize; i++) {
                        if (tagList[i] == this.tag.activeTagName) {
                            return true;
                        }
                    }
                }
                return false;
            },

        },
        mounted() {
            Waves.attach(".header", "waves-light");
            Waves.init();
            if (initGitalk && typeof  initGitalk === "function" && document.getElementById('container')) {
                initGitalk();
            }
        }
    });
};
