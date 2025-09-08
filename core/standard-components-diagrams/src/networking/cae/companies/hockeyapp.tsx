import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOCKEYAPP = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.cloud.hockeyapp;fillColor=#0079D6;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 38,
}

export function Hockeyapp(props: DiagramNodeProps) {
  return (
    <Shape {...HOCKEYAPP} {...props} _style={extendStyle(HOCKEYAPP, props)} />
  )
}
