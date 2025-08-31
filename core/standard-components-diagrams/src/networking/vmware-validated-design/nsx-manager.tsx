import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NSX_MANAGER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.nsx_manager;',
  },
  _width: 60,
  _height: 60,
}

export function NsxManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...NSX_MANAGER}
      {...props}
      _style={extendStyle(NSX_MANAGER, props)}
    />
  )
}
