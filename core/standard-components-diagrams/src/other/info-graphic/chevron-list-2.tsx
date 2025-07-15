import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHEVRON_LIST_2 = {
  _style:
    'shape=rect;fillColor=#B1DDF0;strokeColor=none;fontSize=12;html=1;whiteSpace=wrap;align=left;verticalAlign=top;spacing=5;',
  _width: 1,
  _height: 160,
}

export function ChevronList2(props: DiagramNodeProps) {
  return <Shape {...CHEVRON_LIST_2} {...props} />
}
