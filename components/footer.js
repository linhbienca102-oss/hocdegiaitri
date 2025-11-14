class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-gray-800 text-white py-8 mt-12">
                <div class="container mx-auto px-4">
                    <div class="text-center">
                        <div class="flex items-center justify-center space-x-2 mb-4">
                            <i data-feather="book-open" class="text-indigo-400 w-5 h-5"></i>
                            <span class="text-lg font-semibold text-white">EduSphere</span>
                        </div>
                        <p class="text-gray-400 mb-2">Nền tảng học tập thông minh</p>
                        <p class="text-sm text-gray-500">&copy; 2024 EduSphere. Tất cả quyền được bảo lưu.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);