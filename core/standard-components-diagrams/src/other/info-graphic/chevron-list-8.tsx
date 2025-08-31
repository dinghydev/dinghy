import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHEVRON_LIST_8 = {
  _style: {
    entity:
      'shape=rect;fillColor=#B1DDF0;strokeColor=none;fontSize=12;html=1;whiteSpace=wrap;align=left;verticalAlign=top;spacing=5;rounded=0;',
  },
  _width: 5,
  _height: 420,
}

export function ChevronList8(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_8}
      {...props}
      _style={extendStyle(CHEVRON_LIST_8, props)}
    />
  )
}
