import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMARTPHONE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Smartphone.svg;strokeColor=none;',
  },
  _width: 19.8,
  _height: 43.199999999999996,
}

export function Smartphone(props: DiagramNodeProps) {
  return (
    <Shape {...SMARTPHONE} {...props} _style={extendStyle(SMARTPHONE, props)} />
  )
}
