import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FINANCE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Finance.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 67.2,
}

export function Finance(props: DiagramNodeProps) {
  return <Shape {...FINANCE} {...props} _style={extendStyle(FINANCE, props)} />
}
