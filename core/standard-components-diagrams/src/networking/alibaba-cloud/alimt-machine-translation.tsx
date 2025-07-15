import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALIMT_MACHINE_TRANSLATION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.alimt_machine_translation;',
  _width: 47.400000000000006,
  _height: 47.7,
}

export function AlimtMachineTranslation(props: DiagramNodeProps) {
  return <Shape {...ALIMT_MACHINE_TRANSLATION} {...props} />
}
