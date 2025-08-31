import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_COMPOSER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.logic_composer;',
  },
  _width: 53.7,
  _height: 53.4,
}

export function LogicComposer(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGIC_COMPOSER}
      {...props}
      _style={extendStyle(LOGIC_COMPOSER, props)}
    />
  )
}
