class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
                <nav class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <i data-feather="book-open" class="text-indigo-600 w-6 h-6"></i>
                            <span class="text-xl font-bold text-indigo-700">EduSphere</span>
                        </div>
                        <div class="flex items-center space-x-6">
                            <a href="index.html" class="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Trang chủ</a>
                            <a href="pages/about.html" class="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Giới thiệu</a>
                            <a href="pages/contact.html" class="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Liên hệ</a>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('custom-header', CustomHeader);