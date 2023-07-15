document.addEventListener('DOMContentLoaded', function() {
    loadPackages();
});

function loadPackages() {
    var packages = [
        { id: 1, name: 'Paket A', price: 1000000, facilities: 'Fasilitas A' },
        { id: 2, name: 'Paket B', price: 1500000, facilities: 'Fasilitas B' },
        { id: 3, name: 'Paket C', price: 2000000, facilities: 'Fasilitas C' }
    ];

    var packageList = document.getElementById('package-list');
    
    packages.forEach(function(package) {
        var packageItem = document.createElement('div');
        packageItem.classList.add('package');
        packageItem.innerHTML = `
            <h3>${package.name}</h3>
            <p>Harga: ${package.price}</p>
            <p>Fasilitas: ${package.facilities}</p>
        `;
        packageList.appendChild(packageItem);

        var selectPackage = document.getElementById('package');
        var option = document.createElement('option');
        option.value = package.id;
        option.textContent = package.name;
        selectPackage.appendChild(option);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var message = urlParams.get('message');

    if (message) {
        alert(message);
    }
});
