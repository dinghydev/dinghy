import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLATFORM_OPTIONS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.platform_options;',
  },
  _width: 58,
  _height: 52,
}

export function PlatformOptions(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLATFORM_OPTIONS}
      {...props}
      _style={extendStyle(PLATFORM_OPTIONS, props)}
    />
  )
}
