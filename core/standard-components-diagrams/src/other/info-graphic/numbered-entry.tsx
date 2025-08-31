import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NUMBERED_ENTRY = {
  _style: {
    entity:
      'shape=rect;rounded=1;whiteSpace=wrap;html=1;shadow=0;strokeColor=none;fillColor=#B1DDF0;arcSize=30;fontSize=14;spacingLeft=42;fontStyle=1;fontColor=#FFFFFF;align=left;',
  },
  _width: 0,
  _height: 60,
}

export function NumberedEntry(props: DiagramNodeProps) {
  return (
    <Shape
      {...NUMBERED_ENTRY}
      {...props}
      _style={extendStyle(NUMBERED_ENTRY, props)}
    />
  )
}
