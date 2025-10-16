import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHEVRON_LIST_2 = {
  _style: {
    entity:
      'shape=rect;fillColor=#B1DDF0;strokeColor=none;fontSize=12;html=1;whiteSpace=wrap;align=left;verticalAlign=top;spacing=5;',
  },
  _width: 1,
  _height: 160,
}

export function ChevronList2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_2}
      {...props}
      _style={extendStyle(CHEVRON_LIST_2, props)}
    />
  )
}
