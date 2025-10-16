import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POS_PRINTER = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/POS_Printer.svg;strokeColor=none;',
  },
  _width: 37.2,
  _height: 32.400000000000006,
}

export function PosPrinter(props: DiagramNodeProps) {
  return (
    <Shape
      {...POS_PRINTER}
      {...props}
      _style={extendStyle(POS_PRINTER, props)}
    />
  )
}
