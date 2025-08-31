import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SETTINGS = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.settings',
  _width: 60,
  _height: 60,
}

export function Settings(props: DiagramNodeProps) {
  return (
    <Shape {...SETTINGS} {...props} _style={extendStyle(SETTINGS, props)} />
  )
}
