import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOCKEYAPP = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.cloud.hockeyapp;fillColor=#0079D6;pointerEvents=1;',
  },
  _width: 50,
  _height: 38,
}

export function Hockeyapp(props: DiagramNodeProps) {
  return (
    <Shape {...HOCKEYAPP} {...props} _style={extendStyle(HOCKEYAPP, props)} />
  )
}
