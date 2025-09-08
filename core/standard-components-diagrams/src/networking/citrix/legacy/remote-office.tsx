import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REMOTE_OFFICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.remote_office;',
  },
  _original_width: 92,
  _original_height: 41.5,
}

export function RemoteOffice(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_OFFICE}
      {...props}
      _style={extendStyle(REMOTE_OFFICE, props)}
    />
  )
}
