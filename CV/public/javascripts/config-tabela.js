$(()=>{
    var myLanguage = {
        "emptyTable": "Sem registos para apresentar...",
        "info": "Página _PAGE_ de _PAGES_ páginas (Registos = _TOTAL_)",
        "infoEmpty": "Não há registos para mostrar",
        "infoFiltered": "(filtrados dum total de _MAX_ registos)",
        "thousands": ".",
        "lengthMenu": "Mostrar _MENU_ registos por página",
        "search": "Procurar:",
        "zeroRecords": "Não foram encontrados registos",
        "paginate": {
            "first":      "Primeira",
            "last":       "Última",
            "next":       "Próxima",
            "previous":   "Anterior"
        },
        "aria": {
            "sortAscending":  ": ordenar ascendentemente",
            "sortDescending": ": ordenar descendentemente"
        }
    }
    var myTable = $('#listaRegistos').DataTable(
        {
            "language": myLanguage
        }
    );
    myTable.column( '0:visible' ).order( 'desc' ).draw();

    var myProjsTable = $('#listaProjs').DataTable(
        {
            "columnDefs": [ {
                "targets": [0,1],
                "width": '10%'
              } ],
            "language": myLanguage
        }
    );
    myProjsTable.column( '0:visible' ).order( 'desc' ).draw();

    var mySupTable = $('#listaSup').DataTable(
        {
            "columnDefs": [ {
                "targets": 0,
                "width": '10%'
              } ],
            "language": myLanguage
        }
    );
    mySupTable.column( '0:visible' ).order( 'desc' ).draw();
})

