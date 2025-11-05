import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKSTATION_CLIENT = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/workstation_client.svg;strokeColor=none;',
  },
  _original_width: 42.5,
  _original_height: 50,
}

export function WorkstationClient(props: NodeProps) {
  return (
    <Shape
      {...WORKSTATION_CLIENT}
      {...props}
      _style={extendStyle(WORKSTATION_CLIENT, props)}
    />
  )
}
