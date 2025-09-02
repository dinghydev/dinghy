import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REDSHIFT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.redshift;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _original_width: 150,
  _original_height: 190,
}

export function Redshift(props: DiagramNodeProps) {
  return (
    <Shape {...REDSHIFT} {...props} _style={extendStyle(REDSHIFT, props)} />
  )
}
