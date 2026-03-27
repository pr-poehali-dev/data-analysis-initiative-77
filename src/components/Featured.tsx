const rules = [
  {
    icon: "🚫",
    title: "Въезд только по пропускам",
    text: "Доступ на территорию ГЕОТЭС разрешён исключительно при наличии выданного пропуска установленного образца.",
  },
  {
    icon: "📋",
    title: "Регистрация при входе",
    text: "Все посетители обязаны пройти регистрацию на КПП, предъявить документ, удостоверяющий личность.",
  },
  {
    icon: "⚠️",
    title: "Запрет на съёмку",
    text: "Фото- и видеосъёмка на территории объекта запрещена без письменного разрешения руководства станции.",
  },
  {
    icon: "🦺",
    title: "Средства защиты обязательны",
    text: "Нахождение в производственных зонах — только в защитных касках, жилетах и закрытой обуви.",
  },
  {
    icon: "🐾",
    title: "Животные на территории запрещены",
    text: "Проход с домашними животными на охраняемую территорию не допускается.",
  },
  {
    icon: "🔥",
    title: "Курение и открытый огонь",
    text: "Курение разрешено только в специально отведённых местах. Открытый огонь строго запрещён.",
  },
];

export default function Featured() {
  return (
    <div id="rules" className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Охраняемый объект</h3>
        <p className="text-3xl lg:text-5xl mb-16 text-neutral-900 leading-tight max-w-3xl">
          Правила посещения и охраны территории Мутновской геотермальной электростанции
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule) => (
            <div key={rule.title} className="border border-neutral-200 p-6 hover:border-neutral-900 transition-colors duration-300">
              <div className="text-3xl mb-4">{rule.icon}</div>
              <h4 className="font-bold text-lg mb-2 text-neutral-900">{rule.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{rule.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 bg-neutral-900 text-white">
          <p className="text-sm opacity-70 uppercase tracking-wide mb-2">Важно</p>
          <p className="text-lg">
            Нарушение правил охраны режимного объекта влечёт за собой административную и уголовную ответственность в соответствии с законодательством РФ.
          </p>
        </div>
      </div>
    </div>
  );
}