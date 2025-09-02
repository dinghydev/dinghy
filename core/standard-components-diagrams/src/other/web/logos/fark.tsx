import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FARK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fark;fillColor=#B1B0C7;gradientColor=#ffffff;strokeColor=#B1B0C7',
  },
  _original_width: 44.2,
  _original_height: 70.2,
}

export function Fark(props: DiagramNodeProps) {
  return <Shape {...FARK} {...props} _style={extendStyle(FARK, props)} />
}
