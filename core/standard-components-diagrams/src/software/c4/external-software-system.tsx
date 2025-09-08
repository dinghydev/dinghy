import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXTERNAL_SOFTWARE_SYSTEM = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#8C8496;fontColor=#ffffff;align=center;arcSize=10;strokeColor=#736782;metaEdit=1;resizable=0;points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];',
  },
  _original_width: 0,
  _original_height: 120,
}

export function ExternalSoftwareSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTERNAL_SOFTWARE_SYSTEM}
      {...props}
      _style={extendStyle(EXTERNAL_SOFTWARE_SYSTEM, props)}
    />
  )
}
