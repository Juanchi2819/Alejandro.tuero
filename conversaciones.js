const conversationsData = {
    "19/08/25": {
        "5491165436734": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero reservar mi compromiso de $10.000 con el Dr. Tuero para agendar mi evaluación personalizada y asegurar el descuento especial de agosto con facilidades de pago antes de que se acaben los turnos."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás Soy Camila, asistente del Dr. Tuero.\nTu nombre completo, edad y zona/procedimiento de interés, así te ayudo"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Maria belen fernandez \n33 años \nTigre \nLipoabdomioplastia"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Gracias, María Belén.\nPreferís consulta presencial o virtual?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Cómo te va Camila quisiera más información\nPresencial"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Preferís la sede de San Pedro o la de CABA?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Caba\nAtiende por la tarde\n??"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. En CABA son los jueves de 17 a 20 hs.\nAgendá día y horario acá: https://dr-tuero.com/agenda-caba\nCuando te agendes, avisame la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Perfecto, agendé mi turno para...(FECHA Y HORARIO)\nJueves 21 a las 15:00\nPregunta\nLa consulta es 10 mil o 20 mil"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Genial, gracias por confirmar. La consulta es de $10.000.\n\nPara dejarla confirmada, falta abonar esa seña.\nAlias: alejandro.tuero (Banco Galicia). Enviá captura del comprobante.\n\nSi avanzás con el procedimiento, la seña se reintegra."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Me podés decir un aproximado de lipoabdomioplastia"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Claro. El rango para abdomen es de U$S 2.500 a 10.000.\nEl valor final se define en la consulta según tu anatomía."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Para dejarla confirmada, falta abonar esa seña. Alias: alejandro.tuero  (Banco Galicia). Enviá captura del comprobante.\nCONTEXTO: Se recibió y validó un comprobante de pago. A continuación tenés el JSON resultante.\nJSON:\n\"✅ ¡Perfecto! Recibimos tu comprobante de transferencia por $10.000 ARS. Ya registramos el pago en el sistema.\"\n\nACCIÓN: Redactá un único mensaje para el paciente confirmando recepción del pago.\nReglas:\n- Estilo Camila, español Argentina.\n- Empezá con ✅.\n- Máximo 2 oraciones, breve y claro.\n- Sin negritas ni signos de apertura.\n- No inventes datos: si un campo falta, no lo menciones.\n- Cerrá con una invitación suave a avanzar/coordinar (si corresponde)."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "✅ Excelente, recibimos el pago.\nTu consulta queda confirmada para el jueves 21 a las 15 hs en CABA. Cualquier duda, escribime."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Cuál sería la dirección en Caba"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "La dirección es Av. Córdoba 4190, en Palermo."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Me dirías la dirrección en Caba"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Claro. La dirección es Av. Córdoba 4190, en Palermo."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Muchas gracias"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "A vos, María Belén. Cualquier otra duda, me escribís."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Hola quería comentarte que llevo 15 minutos demorada el tráfico es terrible"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola María Belén, gracias por avisar.\nNo te preocupes, viajá tranquila. Acá te esperamos."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Hola\nBuena tardes"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola María Belén, buenas tardes.\nDecime, en qué te puedo ayudar?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Me Quiero realizar las cirugía\nYo ayer tuve mi consulta con el doctor\nTuero"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Qué bueno, María Belén. Me alegro que te decidieras.\nHablo con el Dr. y te paso fechas de quirófano disponibles."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Bueno yo quería congelar el precio\nY hacer la financiación que comento el día de ayer el doctor"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto, María Belén.\nTe preparo el presupuesto con el plan de pago para que puedas congelar el valor."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Ok"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Dale, perfecto.\nLo estoy preparando y te lo envío por acá en un rato."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491171921235": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás Soy Camila, asistente del Dr. Tuero.\n\nTu nombre completo, edad y zona/procedimiento de interés, así te ayudo"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Jorgelina Evelia victoria Martínez \n26 años  soy de zona Merlo Buenos Aires\nMe gustaría levantarme el gusto y aumentar un poco porque quiero que sea lo más natural posible\nFui mamá haces 3 años y dos meses"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Gracias, Jorgelina. Te paso un rango orientativo y avanzamos con agenda si te sirve.\n\nMamas: U$S 2.000–4.000. El valor final se define en consulta según tu anatomía."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ]
    },
    "20/08/25": {
        "5491124886303": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en San Pedro y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493426397363": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492216965497": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, decime qué zona o procedimiento te interesa y tu edad, por favor."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Quiero. Saber el valor del operación del implante de la prótesis de los seno  \nEdad 33"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Para implantes mamarios, el rango es de U$S 2.000 a 4.000.\n\nEl valor final se define en consulta según tu anatomía. Si te sirve, podemos avanzar."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492954270795": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493856404158": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491123896439": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491149753667": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaría tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "mi nombre es carolina molina 35 años y soy de general rodriguez\ny es que quiero saver cuanto me saldría en pesos aumentarme mis lolas ya que no tengo"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Dale Carolina, te paso un rango orientativo para mamas: U$S 2.000–4.000.\n\nEl valor final se define en la consulta según tu anatomía. Si te parece bien, avanzamos para agendar."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "si"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\n\nLa dirección es Av. Córdoba 4190 (Palermo).\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Perfecto, agendé mi turno para...(FECHA Y HORARIO)\n25/9  \n5pm"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Gracias, Carolina.\n\nPara confirmar la reserva falta la seña de $10.000. Alias: alejandro.tuero (Banco Galicia).\n\nEnviame por acá la captura del comprobante."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ]
    },
    "21/08/25": {
        "5491122765544": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un valor, necesito saber tu edad y la zona o procedimiento que te interesa."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492614707101": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, decime por favor qué zona te interesa y tu edad."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493489339310": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-reunion-virtual\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491178455521": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nLos valores dependen de la zona y tu edad. Decime esos datos y te doy un rango."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "25 años soy de Caba argentina"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Genial. ¿Y qué zona o procedimiento te gustaría tratar?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "De la mamás yo estoy a mamatando mucho y la tengo caída y más cuando di a luz"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Te paso un rango orientativo para mamas: U$S 2.000–4.000.\n\nEl valor final se define en consulta según tu anatomía.\n\nEl Dr. ofrece facilidades de pago. Si te sirve, podemos coordinar una consulta."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492346528716": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-reunion-virtual\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ]
    },
    "22/08/25": {
        "5493415554297": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila.\nPara darte un rango, necesito tu edad y la zona o procedimiento que te interesa."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493875632422": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, necesito tu edad y la zona o procedimiento que te interesa."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "26 años las mamas"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Para mamas, el rango es de U$S 2.000 a 4.000. El valor final se define en la consulta.\n\nEl Dr. ofrece facilidades de pago. Si te sirve, podemos avanzar para agendar."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492216106312": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\nDirección: Av. Córdoba 4190 (Palermo).\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493735505043": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-reunion-virtual\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492622383765": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, necesito saber tu edad y la zona o procedimiento de interés."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491167960981": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\nDirección: Av. Córdoba 4190 (Palermo).\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493329325274": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en San Pedro y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-sanpedro\n\nDirección: Carlos Pellegrini 1525.\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Perfecto, agendé mi turno para...(FECHA Y HORARIO)"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Gracias. Confirmame tu nombre completo."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Cuevas María Carolina"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Falta la seña de $10.000. Alias: alejandro.tuero (Banco Galicia).\n\nEnviá captura del comprobante, no PDF."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Dale mañana te mando"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Genial, quedo a la espera del comprobante."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Dale"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Quedo atenta."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Gracias"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "De nada."
                }
            }
        ],
        "5493385447488": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero reservar mi compromiso de $10.000 con el Dr. Tuero para agendar mi evaluación personalizada y asegurar el descuento especial de agosto con facilidades de pago antes de que se acaben los turnos.\nPodría ser virtual? Ya que soy del interior de Córdoba"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "María de los Ángeles Gariboldi, 20 años y Buenos Aires"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Gracias, María.\n\n¿Qué zona o procedimiento te interesa evaluar?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Aumento mamario"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto, María. Para la consulta virtual tenemos disponibilidad.\n\nTe paso el link para que elijas día y horario: https://dr-tuero.com/agenda-reunion-virtual\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Antes de agendar la consulta, quería saber qué métodos de pago utiliza"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "El Dr. ofrece facilidades de pago. Los detalles y métodos se conversan en la consulta."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Y cuánto sale el aumento mamario también lo dice en la consulta?"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Para mamas, el rango es U$S 2.000–4.000.\n\nEl valor final se define en consulta. El Dr. también ofrece facilidades de pago."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492336454130": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\nDirección: Av. Córdoba 4190 (Palermo).\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493873341452": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, necesito saber tu edad y la zona o procedimiento que te interesa."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "52 años\nQuiero levantarme los senos"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Gracias. Para mamas, el rango orientativo es de U$S 2.000 a 4.000.\n\nEl valor final se define en consulta. El Dr. ofrece facilidades de pago. ¿Querés que coordinemos?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "YO vivo en tartagal\nCómo sería el procedimiento??"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Los detalles del procedimiento los define el Dr. al evaluarte.\n\nComo estás en Tartagal, podemos hacer una consulta virtual. ¿Te parece bien?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Y cuánto me sale la consulta virtual??"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "La consulta tiene una seña de $10.000.\n\nSi después te operás con el Dr., ese monto se reintegra del total."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492975364838": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero.\nEs para aumento mamario"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-reunion-virtual\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Perfecto, agendé mi turno para...(FECHA Y HORARIO)"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Gracias. Confirmame tu nombre completo."
                }
            }
        ],
        "5492954694423": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-reunion-virtual\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ]
    },
    "23/08/25": {
        "5493549439413": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, qué valor tiene el aumento mamario?"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango orientativo, ¿me podrías decir tu edad?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "hola! tengo 22"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Bárbaro. El rango orientativo para mamas es de U$S 2.000 a 4.000.\n\nEl valor final se define en consulta según tu anatomía. El Dr. ofrece facilidades de pago."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "podrías darme más info de esto?"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Claro. Dentro de la consulta te explicamos opciones, descuentos y facilidades de pago.\n\n¿Querés que veamos fechas disponibles?"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491131692933": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\nDirección: Av. Córdoba 4190 (Palermo).\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491134762781": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero.\nQuería saber el precio del aumento mamario"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Para mamas, el rango es U$S 2.000–4.000 y se define en consulta. El Dr. ofrece facilidades de pago.\n\nPerfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492323338550": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta Virtual y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-reunion-virtual\n\nDisponibilidad: mismos rangos que CABA y San Pedro.\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491150421808": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, necesito tu edad y la zona que te interesa."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Buenas tardes\nTengo 37 años\nY soy de zona sur Avellaneda\nQuería consultar el precio de la operación de mamas\nAumento mamario"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Gracias. El rango para aumento mamario es U$S 2.000–4.000.\n\nEl valor final se define en la consulta, según tu anatomía.\n\nEl Dr. ofrece facilidades de pago. Si te sirve, podemos agendar una consulta."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ]
    },
    "24/08/25": {
        "5491140681569": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito\nY si tiene Osde 410"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\nTrabajamos de forma particular.\nPara darte un rango, decime por favor la zona/procedimiento que te interesa y tu edad."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Reducción de mamas , 43 años"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "El rango para mamas es de U$S 2.000 a 4.000.\nEl valor final se define en la consulta según tu anatomía.\nAdemás, el Dr. ofrece facilidades de pago."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Como es la facilidad de pago?"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Las opciones de pago y facilidades se explican en la consulta con el Dr. Tuero.\n¿Querés que veamos las fechas y modalidades disponibles para agendar?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Si\nSiempre por la tarde por favor"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto.\nPara la consulta, decime qué te queda mejor: CABA, San Pedro o virtual."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Caba o virtual"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Dale. En CABA por la tarde es jueves de 17 a 20 hs.\nVirtual tiene la misma disponibilidad.\n¿Cuál link te paso?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Los jueves no puedo\nPresencial"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Entendido. En CABA el Dr. atiende solo los jueves.\nLa otra opción presencial es San Pedro, de lunes a miércoles de 18 a 19:30. ¿Te sirve?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "La verdad que no\nVirtual puede ser?"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Claro. Para la consulta virtual tenemos disponible de lunes a miércoles, de 18 a 19:30 hs.\n¿Te sirve alguno de esos días?"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491154568771": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\nDirección: Av. Córdoba 4190 (Palermo).\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493534402832": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en San Pedro y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-sanpedro\nDirección: Carlos Pellegrini 1525.\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Yo primero quiero asesorarme y saber cuanto me cuesta la consulta porque soy de villa nueva cordoba"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "La consulta se confirma con una seña de $10.000.\nComo sos de Córdoba, te sugiero una consulta virtual."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Ok gracias"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "De nada. Si querés avanzar con la consulta virtual, avisame y te paso el link."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ]
    },
    "25/08/25": {
        "5491164389368": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero recibir un valor aproximado según el procedimiento que necesito"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, necesito saber qué zona te interesa y tu edad."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492804020753": [],
        "5491140723047": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero reservar mi compromiso de $10.000 con el Dr. Tuero para agendar mi evaluación personalizada y asegurar el descuento especial de agosto con facilidades de pago antes de que se acaben los turnos."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara ayudarte, necesitaría tu nombre completo, edad y la zona o procedimiento de tu interés."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493329388005": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, como va? quiero coordinar mi consulta en San Pedro y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara ayudarte mejor, necesito tu nombre completo, edad y el procedimiento de tu interés."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5493487475469": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, buenos días\nTengo turno a las 11 con el doctor Tuero"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, buen día.\nPerfecto, te esperamos."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "En la dirección que me pasaste MITRE al 1200"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Disculpame, debe haber una confusión con la dirección.\nEn San Pedro es Carlos Pellegrini 1525. En CABA, Av. Córdoba 4190."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Ok"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Confirmame en cuál de las dos sedes tenés el turno."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "En San Pedro"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Genial. Te esperamos entonces en Carlos Pellegrini 1525."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Ok"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Cualquier otra duda, me escribís."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero reservar mi compromiso de $10.000 con el Dr. Tuero para agendar mi evaluación personalizada y asegurar el descuento especial de agosto con facilidades de pago antes de que se acaben los turnos."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola! Excelente decisión. Te comento cómo funciona. La consulta de evaluación tiene un valor total de $20.000. Para reservar tu turno, abonás ahora esta seña de $10.000 y los $10.000 restantes los pagás el día que venís al consultorio.\n\nLo más importante es que si después decidís avanzar con la cirugía, el total de esos $20.000 se te descuenta del valor final del procedimiento.\n\nPara enviarte los datos correctos, decime por favor, preferís abonar la seña en pesos argentinos o en dólares?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Hola mucho gusto, prefiero abonar la seña en pesos Argentinos"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Para abonar en pesos, el alias de la cuenta es **alejandro.tuero** (Banco Galicia).\n\nUna vez que hagas la transferencia, te pido por favor que me envíes por acá una captura de pantalla del comprobante. Es muy importante que sea una imagen y no un PDF, porque nuestro sistema solo puede verificar capturas para poder avanzar.\n\nQuedo a la espera para seguir con el agendamiento de tu turno. Gracias"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Mensaje para paciente: ✅ ¡Excelente! Recibimos tu comprobante de transferencia por $10.000 ARS. ¡Muchas gracias por tu pago! "
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Excelente, me confirman que recibimos tu pago correctamente. ¡Muchas gracias! Ahora sí, procedamos a agendar tu turno.\n\nPara dejar todo listo, necesitaría que me pases tu nombre completo y tu correo electrónico. Y por último, para completar tu ficha, me recordarías tu edad?\n\nAdemás, contame si preferís que la consulta sea virtual o presencial."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Mi nombre es: Amelia Alejandra Roh\nMail: alejandraroh1@hotmail.com \nEdad: 57 años \nPrefiero consulta presencial"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto, Amelia. Muchas gracias por la información.\n\nYa con tus datos agendados, decime por favor en cuál de nuestros dos consultorios te quedaría más cómodo tener la consulta: en Capital Federal o en San Pedro?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "En San Pedro"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto, Amelia. Para poder buscar un turno, necesitaría que me orientes un poco con tus fechas. Tenés alguna preferencia de día o semana para la consulta en San Pedro?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Puedo los días Lunes y Viernes"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Amelia, te pido disculpas. Estoy teniendo un inconveniente técnico con nuestro sistema de agendas y no puedo ver los turnos disponibles en este momento.\n\nPero no te preocupes, ya dejé todos tus datos guardados y tu pago registrado.\n\nEn cuanto se solucione, yo misma te voy a contactar por acá para pasarte los horarios disponibles para un lunes en San Pedro y terminar de coordinar el turno.\n\nTe pido disculpas por la demora y te agradezco la paciencia."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Al contrario gracias a vos por todo!! \nEspero tu respuesta.\nSaludos!!"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "De nada, Amelia! Gracias a vos por la comprensión.\n\nNos hablamos pronto. Saludos"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "El tiempo de espera ha finalizado. El doctor ya ha evaluado las fotos. Tu tarea ahora es ejecutar la FASE 4 - ENTREGA DEVOLUCIÓN. Usa la herramienta 'agente_conocimiento' para obtener la devolución médica y comunícasela al paciente de forma natural."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola Amelia, cómo estás? Te escribo porque ya se solucionó el inconveniente con el sistema de agendas.\n\nEstuve revisando y tengo dos opciones para vos en la sede de San Pedro:\n\n* **Viernes 23 de agosto a las 16:00 hs.**\n* **Lunes 26 de agosto a las 11:00 hs.**\n\nCuál de los dos te quedaría mejor?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Puedo los días Lunes y Viernes"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto, Amelia. Entonces, para confirmar, ¿cuál de estos dos turnos te agendo?\n\n* **Viernes 23 de agosto a las 16:00 hs.**\n* **Lunes 26 de agosto a las 11:00 hs.**\n\nAvisame cuál preferís y ya te lo dejo reservado."
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Me quedaría mejor el día Lunes, pero es 25"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Tenés toda la razón, Amelia, el lunes es 25. Mil disculpas por el error en la fecha.\n\nEntonces, te agendo para el **Lunes 25 de agosto a las 11:00 hs** en la sede de San Pedro. Te parece bien?"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Me parece perfecto, muchísimas gracias !!"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto Amelia! Ya quedó tu turno agendado.\n\nTe confirmo: **Lunes 25 de agosto a las 11:00 hs** en el consultorio de San Pedro.\n\nLa dirección es **Mitre 1200**.\n\nCualquier cosita, no dudes en escribirme por acá. Que tengas un excelente día"
                }
            },
            {
                "message": {
                    "type": "human",
                    "content": "Gracias, igualmente !!"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "De nada, Amelia! Nos vemos el lunes. Que tengas un buen día"
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5492665046314": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\nDirección: Av. Córdoba 4190 (Palermo).\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ],
        "5491134858305": [
            {
                "message": {
                    "type": "human",
                    "content": "Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\nCuando te agendes, avisame por acá la fecha y hora que elegiste."
                }
            },
            {
                "message": {
                    "type": "ai",
                    "content": "Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."
                }
            }
        ]
    },
"26/08/25": {
        "5491125599241": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nLos valores dependen de la zona y edad. Decime eso y te doy un rango orientativo."}},
            {"message":{"type":"human","content":"Zona mamaria tengo 18"}},
            {"message":{"type":"ai","content":"Para mamas, el rango es de U$S 2.000 a 4.000.\n\nEl valor final se define en consulta. El Dr. ofrece facilidades de pago."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."}}
        ],
        "5491125852320": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, necesito saber tu edad y la zona o procedimiento que te interesa."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."}}
        ],
        "5492920709695": [
            {"message":{"type":"human","content":"Hola, quiero coordinar mi consulta en CABA y confirmar mi turno con el Dr. Tuero."}},
            {"message":{"type":"ai","content":"Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara ayudarte, necesito tu nombre completo, edad y la zona o procedimiento de interés."}},
            {"message":{"type":"human","content":"yo quiero una consulta\nen caba"}},
            {"message":{"type":"ai","content":"Ok, CABA. Para seguir, necesito tu nombre completo, edad y la zona de interés."}},
            {"message":{"type":"human","content":"en caba"}},
            {"message":{"type":"ai","content":"Entendido, la consulta es en CABA.\n\nDecime, ¿qué zona o procedimiento te interesa evaluar?"}},
            {"message":{"type":"ai","content":"Perfecto, por favor completá tu nombre, edad y la zona o procedimiento que te interesa así podemos coordinar el turno."}}
        ],
        "5491149759818": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara darte un rango, necesito saber la zona a tratar y tu edad."}},
            {"message":{"type":"human","content":"Hola buenas noches. Quisiera información para hacer las lolas. Tengo 32años\nhola buenas noches. hace años que me gustaría poder operarme las lolas pero lamentablemente nunca puede juntar el dinero para poder hacerlo 😞 quisiera saber si me pueden dar una oportunidad para poder ir pagando. desdé ya muchas gracias"}},
            {"message":{"type":"ai","content":"Hola, gracias por compartir tu situación.\n\nEl Dr. ofrece facilidades de pago. Los detalles se definen en la consulta.\n\n¿Te gustaría que veamos cómo agendar una reunión con él?"}},
            {"message":{"type":"human","content":"Si muchas gracias"}},
            {"message":{"type":"ai","content":"Perfecto. ¿Preferís una consulta presencial o virtual?"}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."}}
        ],
        "5493795119108": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\nPara darte un rango, decime por favor tu edad y la zona o procedimiento que te interesa."}},
            {"message":{"type":"human","content":"27\nAumento de mamss"}},
            {"message":{"type":"ai","content":"Bárbaro. Para aumento de mamas, el rango es de U$S 2.000 a 4.000.\n\nEl valor final lo define el Dr. en la consulta, según tu anatomía.\n\nAdemás, el Dr. ofrece facilidades de pago. Si te sirve, podemos ver de agendar."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."}}
        ]
    },
"27/08/25": {
        "5491150005894": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, ¿cómo estás? Soy Camila.\nLos valores dependen de la zona y tu edad. Decime cuáles son y te doy un rango orientativo."}},
            {"message":{"type":"human","content":"Tengo 22 años"}},
            {"message":{"type":"ai","content":"Gracias. Decime ahora la zona o procedimiento que te interesa."}},
            {"message":{"type":"human","content":"Tengo los pechos caídos después de ser mamá y quería levantarlo\nNo quiero agregarme nada solo hacer un levantamiento"}},
            {"message":{"type":"ai","content":"Para mamas, el rango es de U$S 2.000 a 4.000.\nEl valor final se define en consulta según tu anatomía. El Dr. ofrece facilidades de pago."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."}}
        ],
        "5491126945257": [
            {"message":{"type":"human","content":"Hola, quiero recibir un valor aproximado según el procedimiento que necesito"}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nLos valores dependen de zona y edad. Decime zona y edad y te doy un rango orientativo."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Quería saber si pudiste ver las fechas para la consulta o si te quedó alguna duda pendiente. Saludos."}}
        ],
        "5493329610793": [
            {"message":{"type":"human","content":"Hola mi nombre es Oriana,soy de Baradero y quiero agendar una consulta con el Dr. Tuero. para recibir todos los detalles sobre el procedimiento que busco. En este caso seria para consulta por implantes mamarios.\nQuisiera saber los días y horarios disponibles para hacer la consulta. Gracias"}},
            {"message":{"type":"ai","content":"Hola Oriana, ¿cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nPara pasarte los horarios, necesitaría saber tu edad por favor."}},
            {"message":{"type":"human","content":"Tengo 26 años. Disculpa por el horario"}},
            {"message":{"type":"ai","content":"Bárbaro. Para darte los horarios, decime qué te queda mejor: San Pedro, CABA o virtual."}},
            {"message":{"type":"human","content":"San Pedro por favor!!\nTe consulto sin compromiso hay posibilidad de saber un costo aproximado para ya ir con una idea?"}},
            {"message":{"type":"ai","content":"Claro. Para mamas el rango es de U$S 2.000 a 4.000. El valor final se define en la consulta.\n\nEl Dr. ofrece facilidades de pago. Si te sirve, te paso el link para agendar en San Pedro."}},
            {"message":{"type":"human","content":"Genial!!\nSi si pasame el link por favor!"}},
            {"message":{"type":"ai","content":"Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-sanpedro\n\nLa dirección es Carlos Pellegrini 1525.\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."}}
        ],
        "5493887469155": [
            {"message":{"type":"human","content":"Hola, quiero agendar una consulta con el Dr. Tuero. para recibir todos los detalles sobre el procedimiento que busco."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}}
        ],
        "5491151430919": [
            {"message":{"type":"human","content":"Hola, quiero agendar una consulta con el Dr. Tuero. para recibir todos los detalles sobre el procedimiento que busco."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaría tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}},
            {"message":{"type":"human","content":"Zaira Rodriguez\n26\nSan justo"}},
            {"message":{"type":"ai","content":"Gracias, Zaira.\n\n¿Qué procedimiento o zona del cuerpo te interesa consultar?"}},
            {"message":{"type":"human","content":"Bubis"}},
            {"message":{"type":"ai","content":"Bárbaro, Zaira.\n\nPara la consulta con el Dr. Tuero, ¿preferís que sea presencial o virtual?"}}
        ],
        "5491162597712": [
            {"message":{"type":"human","content":"Hola, quiero agendar una consulta con el Dr. Tuero. para recibir todos los detalles sobre el procedimiento que busco."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaria tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}},
            {"message":{"type":"human","content":"Gimena, 37 años, zona sur avellaneda. Implantes mamarios"}},
            {"message":{"type":"ai","content":"Perfecto, Gimena. Preferís una consulta presencial o virtual?"}},
            {"message":{"type":"human","content":"Presencial. Donde esta y cuanto vale?"}},
            {"message":{"type":"ai","content":"El rango para mamas es U$S 2.000–4.000. El Dr. ofrece facilidades de pago.\n\nPara la consulta presencial, preferís San Pedro o CABA?"}},
            {"message":{"type":"human","content":"Caba"}},
            {"message":{"type":"ai","content":"Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\nLa dirección es Av. Córdoba 4190 (Palermo).\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."}},
            {"message":{"type":"human","content":"La consulta tiene algún costo?"}},
            {"message":{"type":"ai","content":"Sí, la consulta tiene un valor de $10.000.\n\nSi después avanzás con un procedimiento, se reintegra del total."}},
            {"message":{"type":"human","content":"Perfecto. Miro la agenda! Gracias"}},
            {"message":{"type":"ai","content":"Dale, genial. Avisame por acá cuando tengas la fecha y hora."}}
        ],
        "5491138304369": [
            {"message":{"type":"human","content":"Hola, quiero agendar una consulta con el Dr. Tuero. para recibir todos los detalles sobre el procedimiento que busco."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaría tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}}
        ],
        "5491151558418": [
            {"message":{"type":"human","content":"Hola, quiero agendar una consulta con el Dr. Tuero. para recibir todos los detalles sobre el procedimiento que busco."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaría tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}},
            {"message":{"type":"human","content":"Leonela Arias 24 años, aumento mamario"}},
            {"message":{"type":"ai","content":"Gracias, Leonela. ¿Preferís una consulta presencial o virtual?"}},
            {"message":{"type":"human","content":"Como seria virtual"}},
            {"message":{"type":"ai","content":"Es una videollamada con el Dr. para evaluarte y resolver dudas.\n\n¿Te gustaría agendar una?"}},
            {"message":{"type":"human","content":"Y presencial donde seria"}},
            {"message":{"type":"ai","content":"Atendemos en San Pedro o en CABA (Palermo).\n\n¿Cuál de las dos sedes te quedaría mejor?"}},
            {"message":{"type":"human","content":"En palerml"}},
            {"message":{"type":"ai","content":"Perfecto. Agendá día y horario acá: https://dr-tuero.com/agenda-caba\nLa dirección es Av. Córdoba 4190 (Palermo).\n\nCuando te agendes, avisame por acá la fecha y hora que elegiste."}}
        ],
        "5493417434047": [
            {"message":{"type":"human","content":"Hola, quiero agendar una consulta con el Dr. Tuero. para recibir todos los detalles sobre el procedimiento que busco."}},
            {"message":{"type":"ai","content":"Hola, cómo estás? Soy Camila, asistente del Dr. Tuero.\n\nNecesitaría tu nombre completo, edad y zona/procedimiento de interés, así puedo ayudarte mejor."}},
            {"message":{"type":"human","content":"Hola buenas noches\nSoy de rosario quería saber si puedo saber sobre precio y procedimiento, puede ser ?"}},
            {"message":{"type":"ai","content":"Claro. Los valores dependen de la zona y tu edad.\n\nDecime eso y te doy un rango orientativo."}},
            {"message":{"type":"human","content":"Genial , tengo 21 años, de la zona que sería ? \nÓsea quiero hacerme pechos y no tengo nada poco y nada jaja y quiero ponerme unas grandes a lo que tengo\nTendría que pasarte alguna foto de cómo tengo y como las quiero o no es necesario\nNo sabría muy bien sobre los tamaños y tiempo que tengo que estar allá\nSoy de rosario"}},
            {"message":{"type":"ai","content":"El tamaño y el plan lo define el Dr. en la consulta. No es necesario que me envíes fotos por acá.\n\nPara mamas, el rango es de U$S 2.000 a 4.000. El Dr. ofrece facilidades de pago.\n\nEl valor final se ajusta en la consulta. Siendo de Rosario, ¿te sirve una consulta virtual?"}}
        ]
    }
}


