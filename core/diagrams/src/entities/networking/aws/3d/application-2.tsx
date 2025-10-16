import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.application2;fillColor=#86E83A;strokeColor=#B0F373;aspect=fixed;',
  },
  _original_width: 62,
  _original_height: 53,
}

export function Application2(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_2}
      {...props}
      _style={extendStyle(APPLICATION_2, props)}
    />
  )
}
