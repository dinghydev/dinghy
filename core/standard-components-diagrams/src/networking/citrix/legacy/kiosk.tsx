import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KIOSK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.kiosk;',
  },
  _original_width: 65,
  _original_height: 85,
}

export function Kiosk(props: DiagramNodeProps) {
  return <Shape {...KIOSK} {...props} _style={extendStyle(KIOSK, props)} />
}
