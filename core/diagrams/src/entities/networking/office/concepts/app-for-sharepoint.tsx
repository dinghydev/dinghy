import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_FOR_SHAREPOINT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.app_for_sharepoint;',
  },
  _original_width: 53,
  _original_height: 40,
}

export function AppForSharepoint(props: NodeProps) {
  return (
    <Shape
      {...APP_FOR_SHAREPOINT}
      {...props}
      _style={extendStyle(APP_FOR_SHAREPOINT, props)}
    />
  )
}
