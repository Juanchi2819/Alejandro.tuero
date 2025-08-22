const conversationsData = {
    "19/08/25": {
        "5491165436734": [
            {"message":{"type":"human","content":"Hola, quiero reservar mi compromiso de $10.000 con el Dr. Tuero para agendar mi evaluación personalizada y asegurar el descuento especial de agosto con facilidades de pago antes de que se acaben los turnos."}},
            {"message":{"type":"ai","content":"Hola, cómo estás Soy Camila, asistente del Dr. Tuero.\nTu nombre completo, edad y zona/procedimiento de interés, así te ayudo"}},
            {"message":{"type":"human","content":"Maria belen fernandez \n33 años \nTigre \nLipoabdomioplastia"}},
            {"message":{"type":"ai","content":"Gracias, María Belén.\nPreferís consulta presencial o virtual?"}},
            {"message":{"type":"human","content":"Cómo te va Camila quisiera más información\nPresencial"}},
            {"message":{"type":"ai","content":"Perfecto. Preferís la sede de San Pedro o la de CABA?"}},
            {"message":{"type":"human","content":"Caba\nAtiende por la tarde\n??"}},
            {"message":{"type":"ai","content":"Perfecto. En CABA son los jueves de 17 a 20 hs.\nAgendá día y horario acá: https://dr-tuero.com/agenda-caba\nCuando te agendes, avisame la fecha y hora que elegiste."}},
            {"message":{"type":"human","content":"Perfecto, agendé mi turno para...(FECHA Y HORARIO)\nJueves 21 a las 15:00\nPregunta\nLa consulta es 10 mil o 20 mil"}},
            {"message":{"type":"ai","content":"Genial, gracias por confirmar. La consulta es de $10.000.\n\nPara dejarla confirmada, falta abonar esa seña.\nAlias: alejandro.tuero (Banco Galicia). Enviá captura del comprobante.\n\nSi avanzás con el procedimiento, la seña se reintegra."}},
            {"message":{"type":"human","content":"Me podés decir un aproximado de lipoabdomioplastia"}},
            {"message":{"type":"ai","content":"Claro. El rango para abdomen es de U$S 2.500 a 10.000.\nEl valor final se define en la consulta según tu anatomía."}},
            {"message":{"type":"human","content":"Para dejarla confirmada, falta abonar esa seña. Alias: alejandro.tuero  (Banco Galicia). Enviá captura del comprobante.\nCONTEXTO: Se recibió y validó un comprobante de pago. A continuación tenés el JSON resultante.\nJSON:\n\"✅ ¡Perfecto! Recibimos tu comprobante de transferencia por $10.000 ARS. Ya registramos el pago en el sistema.\"\n\nACCIÓN: Redactá un único mensaje para el paciente confirmando recepción del pago.\nReglas:\n- Estilo Camila, español Argentina.\n- Empezá con ✅.\n- Máximo 2 oraciones, breve y claro.\n- Sin negritas ni signos de apertura.\n- No inventes datos: si un campo falta, no lo menciones.\n- Cerrá con una invitación suave a avanzar/coordinar (si corresponde)."}},
            {"message":{"type":"ai","content":"✅ Excelente, recibimos el pago.\nTu consulta queda confirmada para el jueves 21 a las 15 hs en CABA. Cualquier duda, escribime."}},
            {"message":{"type":"human","content":"Cuál sería la dirección en Caba"}},
            {"message":{"type":"ai","content":"La dirección es Av. Córdoba 4190, en Palermo."}},
            {"message":{"type":"human","content":"Me dirías la dirrección en Caba"}},
            {"message":{"type":"ai","content":"Claro. La dirección es Av. Córdoba 4190, en Palermo."}},
            {"message":{"type":"human","content":"Muchas gracias"}},
            {"message":{"type":"ai","content":"A vos, María Belén. Cualquier otra duda, me escribís."}}
        ],
        "5491171921235": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, cómo estás Soy Camila, asistente del Dr. Tuero.\n\nTu nombre completo, edad y zona/procedimiento de interés, así te ayudo"}},
            {"message":{"type":"human","content":"Jorgelina Evelia victoria Martínez \n26 años  soy de zona Merlo Buenos Aires\nMe gustaría levantarme el gusto y aumentar un poco porque quiero que sea lo más natural posible\nFui mamá haces 3 años y dos meses"}},
            {"message":{"type":"ai","content":"Gracias, Jorgelina. Te paso un rango orientativo y avanzamos con agenda si te sirve.\n\nMamas: U$S 2.000–4.000. El valor final se define en consulta según tu anatomía."}}
        ]
    },
    "20/08/25": {
        "5493856404158": [
            {"message":{"type":"human","content":"Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}}
        ],
        "5492216965497": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, decime qué zona o procedimiento te interesa y tu edad, por favor."}},
            {"message":{"type":"human","content":"Quiero. Saber el valor del operación del implante de la prótesis de los seno  \nEdad 33"}},
            {"message":{"type":"ai","content":"Para implantes mamarios, el rango es de U$S 2.000 a 4.000.\n\nEl valor final se define en consulta según tu anatomía. Si te sirve, podemos avanzar."}}
        ],
        "5491149753667": [
            {"message":{"type":"human","content":"Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaría tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}},
            {"message":{"type":"human","content":"mi nombre es carolina molina 35 años y soy de general rodriguez\ny es que quiero saver cuanto me saldría en pesos aumentarme mis lolas ya que no tengo"}},
            {"message":{"type":"ai","content":"Dale Carolina, te paso un rango orientativo para mamas: U$S 2.000–4.000.\n\nEl valor final se define en la consulta según tu anatomía. Si te parece bien, avanzamos para agendar."}},
            {"message":{"type":"human","content":"si"}},
            {"message":{"type":"ai","content":"Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\n\nLa dirección es Av. Córdoba 4190 (Palermo).\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."}},
            {"message":{"type":"human","content":"Perfecto, agendé mi turno para...(FECHA Y HORARIO)\n25/9  \n5pm"}},
            {"message":{"type":"ai","content":"Gracias, Carolina.\n\nPara confirmar la reserva falta la seña de $10.000. Alias: alejandro.tuero (Banco Galicia).\n\nEnviame por acá la captura del comprobante."}}
        ],
        "5492954270795": [
            {"message":{"type":"human","content":"Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}}
        ],
        "5493426397363": [
            {"message":{"type":"human","content":"Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}}
        ],
        "5491124886303": [
            {"message":{"type":"human","content":"Hola, quiero coordinar mi consulta en San Pedro y confirmar mi turno con el Dr. Tuero."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}}
        ],
        "5491123896439": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}}
        ]
    },
    "21/08/25": {
        "5492614707101": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, decime por favor qué zona te interesa y tu edad."}}
        ],
        "5493489339310": [
            {"message":{"type":"human","content":"Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."}},
            {"message":{"type":"ai","content":"Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-reunion-virtual\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."}}
        ],
        "5491122765544": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un valor, necesito saber tu edad y la zona o procedimiento que te interesa."}}
        ],
        "5492346528716": [
            {"message":{"type":"human","content":"Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."}},
            {"message":{"type":"ai","content":"Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-reunion-virtual\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."}}
        ],
        "5491178455521": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nLos valores dependen de la zona y tu edad. Decime esos datos y te doy un rango."}},
            {"message":{"type":"human","content":"25 años soy de Caba argentina"}},
            {"message":{"type":"ai","content":"Genial. ¿Y qué zona o procedimiento te gustaría tratar?"}},
            {"message":{"type":"human","content":"De la mamás yo estoy a mamatando mucho y la tengo caída y más cuando di a luz"}},
            {"message":{"type":"ai","content":"Te paso un rango orientativo para mamas: U$S 2.000–4.000.\n\nEl valor final se define en consulta según tu anatomía.\n\nEl Dr. ofrece facilidades de pago. Si te sirve, podemos coordinar una consulta."}}
        ]
    }
};
