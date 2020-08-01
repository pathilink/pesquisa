function postToGoogle() {
    var field1 = $("#genero").val();
    var field2 = $("#idade").val();

    var field3 = $("#a1q1").val();
    var field4 = $("#a1q2").val();

    var field5 = $("#a2q1").val();
    var field6 = $("#a2q2").val();

    var field7 = $("#a3q1").val();
    var field8 = $("#a3q2").val();

    var field9 = $("#a4q1").val();
    var field10 = $("#a4q2").val();

    var field11 = $("#a5q1").val();
    var field12 = $("#a5q2").val();

    var field13 = $("#a6q1").val();
    var field14 = $("#a6q2").val();

    var field15 = $("#a7q1").val();
    var field16 = $("#a7q2").val();

    var field17 = $("#a8q1").val();
    var field18 = $("#a8q2").val();

    var field19 = $("#a9q1").val();
    var field20 = $("#a9q2").val();

    var field21 = $("#a10q1").val();
    var field22 = $("#a10q2").val();

    var field23 = $("#a11q1").val();
    var field24 = $("#a11q2").val();

    var field25 = $("#a12q1").val();
    var field26 = $("#a12q2").val();

    var field27 = $("#a13q1").val();
    var field28 = $("#a13q2").val();

    var field29 = $("#a14q1").val();
    var field30 = $("#a14q2").val();

    var field31 = $("#a15q1").val();
    var field32 = $("#a15q2").val();

    var field33 = $("#a16q1").val();
    var field34 = $("#a16q2").val();

    var field35 = $("#a17q1").val();
    var field36 = $("#a17q2").val();

    var field37 = $("#a18q1").val();
    var field38 = $("#a18q2").val();

    var field39 = $("#a19q1").val();
    var field40 = $("#a19q2").val();

    var field41 = $("#a20q1").val();
    var field42 = $("#a20q2").val();

    var field43 = $("#a21q1").val();
    var field44 = $("#a21q2").val();

    var field45 = $("#a22q1").val();
    var field46 = $("#a22q2").val();

    var field47 = $("#a23q1").val();
    var field48 = $("#a23q2").val();

    var field49 = $("#a24q1").val();
    var field50 = $("#a24q2").val();

    var field51 = $("#a25q1").val();
    var field52 = $("#a25q2").val();

    var field53 = $("#a26q1").val();
    var field54 = $("#a26q2").val();

    var field55 = $("#a27q1").val();
    var field56 = $("#a27q2").val();

    var field57 = $("#a28q1").val();
    var field58 = $("#a28q2").val();

    var field59 = $("#a29q1").val();
    var field60 = $("#a29q2").val();

    var field61 = $("#a30q1").val();
    var field62 = $("#a30q2").val();

    var field63 = $("#a31q1").val();
    var field64 = $("#a31q2").val();

    var field65 = $("#a32q1").val();
    var field66 = $("#a32q2").val();

    var field67 = $("#a33q1").val();
    var field68 = $("#a33q2").val();

    var field69 = $("#a34q1").val();
    var field70 = $("#a34q2").val();

    var field71 = $("#a35q1").val();
    var field72 = $("#a35q2").val();

    var field73 = $("#a36q1").val();
    var field74 = $("#a36q2").val();

    var field75 = $("#a37q1").val();
    var field76 = $("#a37q2").val();

    var field77 = $("#a38q1").val();
    var field78 = $("#a38q2").val();

    var field79 = $("#a39q1").val();
    var field80 = $("#a39q2").val();

    var field81 = $("#a40q1").val();
    var field82 = $("#a40q2").val();

    var field83 = $("#a41q1").val();
    var field84 = $("#a41q2").val();

    var field85 = $("#a42q1").val();
    var field86 = $("#a42q2").val();

    var field87 = $("#a43q1").val();
    var field88 = $("#a43q2").val();

    var field89 = $("#a44q1").val();
    var field90 = $("#a44q2").val();

    var field91 = $("#a45q1").val();
    var field92 = $("#a45q2").val();

    var field93 = $("#a46q1").val();
    var field94 = $("#a46q2").val();

    var field95 = $("#a47q1").val();
    var field96 = $("#a47q2").val();

    var field97 = $("#a48q1").val();
    var field98 = $("#a48q2").val();



    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSceFz08M70Wz1vul7py4VkkxkCCTxZl-4SmLwf72E_9QBIlew/formResponse?",
        data: {
            "entry.943883290": field1,
            "entry.1948568854": field2,

            "entry.614831059": field3,
            "entry.379644413": field4,

            "entry.645336038": field5,
            "entry.1956582696": field6,

            "entry.762736056": field7,
            "entry.728189857": field8,

            "entry.735712697": field9,
            "entry.210672253": field10,

            "entry.1961707095": field11,
            "entry.778379875": field12,

            "entry.629756052": field13,
            "entry.1981590472": field14,

            "entry.1706134439": field15,
            "entry.1360623052": field16,

            "entry.745960150": field17,
            "entry.1946654193": field18,

            "entry.2099313987": field19,
            "entry.365655106": field20,

            "entry.305181936": field21,
            "entry.1956271144": field22,

            "entry.1769489791": field23,
            "entry.1682674160": fiel24,

            "entry.976023553": field25,
            "entry.607520869": field26,

            "entry.336680130": field27,
            "entry.626005238": field28,

            "entry.610360314": field29,
            "entry.15597140": field30,

            "entry.1852071720": field31,
            "entry.750133495": field32,

            "entry.1668558102": field33,
            "entry.1044680938": field34,

            "entry.567297023": field35,
            "entry.1003022545": field36,

            "entry.1321984775": field37,
            "entry.1512699382": field38,

            "entry.1328816880": field39,
            "entry.311742917": field40,

            "entry.1581597698": field41,
            "entry.1756904223": field42,

            "entry.804133443": field43,
            "entry.912851670": field44,

            "entry.174297164": field45,
            "entry.1993872054": field46,

            "entry.655451326": field47,
            "entry.941972324": field48,

            "entry.1626117324": field49,
            "entry.740398030": field50,

            "entry.565683188": field51,
            "entry.303261906": field52,

            "entry.1294231884": field53,
            "entry.989889947": fiel54,

            "entry.2012054776": field55,
            "entry.695918292": field56,

            "entry.987395515": field57,
            "entry.1010481030": field58,

            "entry.1718637424": field59,
            "entry.1035971854": field60,

            "entry.265838228": field61,
            "entry.661492643": field62,

            "entry.203609397": field63,
            "entry.1801054744": field64,

            "entry.1917574722": field65,
            "entry.210379273": field66,

            "entry.2090597493": field67,
            "entry.849436636": field68,

            "entry.1334688899": field69,
            "entry.1604813849": field70,

            "entry.375992385": field71,
            "entry.1495712338": field72,

            "entry.2042925890": field73,
            "entry.800534821": field74,

            "entry.127551180": field75,
            "entry.1012526279": field76,

            "entry.96411978": field77,
            "entry.514487227": field78,

            "entry.1230608566": field79,
            "entry.1994646436": field80,

            "entry.94971704": field81,
            "entry.152116164": field82,

            "entry.1125188777": field83,
            "entry.1490413889": fiel84,

            "entry.307644049": field85,
            "entry.1238428696": field86,

            "entry.2073597213": field87,
            "entry.147761170": field88,

            "entry.865207678": field89,
            "entry.639795191": field90,

            "entry.1596337841": field91,
            "entry.743947887": field92,

            "entry.927087716": field93,
            "entry.843633785": field94,

            "entry.1967611736": field95,
            "entry.433184287": field96,

            "entry.40982424": field97,
            "entry.546355857": field98

        },
        type: "POST",
        dataType: "xml",
        success: function(d) {},
        error: function(x, y, z) {

            $('#success-msg').show();
            $('#form').hide();

        }
    });
    return false;
}