import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RADIO_BUTTON_ON_DISABLED_LIGHT = {
  _style:
    'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.radiobutton;strokeColor=#B0B0B0;fillColor=#B0B0B0;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  _width: 0,
  _height: 16,
}

export function RadioButtonOnDisabledLight(props: DiagramNodeProps) {
  return <Shape {...RADIO_BUTTON_ON_DISABLED_LIGHT} {...props} />
}
