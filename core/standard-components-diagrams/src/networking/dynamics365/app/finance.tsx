import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FINANCE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Finance.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 67.2,
}

export function Finance(props: DiagramNodeProps) {
  return <Shape {...FINANCE} {...props} _style={extendStyle(FINANCE, props)} />
}
