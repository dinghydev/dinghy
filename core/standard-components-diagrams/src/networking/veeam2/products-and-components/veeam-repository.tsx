import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_REPOSITORY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_repository;',
  _width: 37,
  _height: 38,
}

export function VeeamRepository(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_REPOSITORY}
      {...props}
      _style={extendStyle(VEEAM_REPOSITORY, props)}
    />
  )
}
