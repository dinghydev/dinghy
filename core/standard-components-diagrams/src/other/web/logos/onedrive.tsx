import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ONEDRIVE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.onedrive;fillColor=#094AB1;strokeColor=none',
  },
  _original_width: 71.2,
  _original_height: 43.2,
}

export function Onedrive(props: DiagramNodeProps) {
  return (
    <Shape {...ONEDRIVE} {...props} _style={extendStyle(ONEDRIVE, props)} />
  )
}
