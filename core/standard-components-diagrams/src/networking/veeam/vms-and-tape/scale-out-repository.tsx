import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCALE_OUT_REPOSITORY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.scale_out_repository;',
  },
  _width: 64.8,
  _height: 57.2,
}

export function ScaleOutRepository(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCALE_OUT_REPOSITORY}
      {...props}
      _style={extendStyle(SCALE_OUT_REPOSITORY, props)}
    />
  )
}
