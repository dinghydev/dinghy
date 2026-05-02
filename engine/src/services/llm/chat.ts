import { z } from 'zod'
import { createChatModel, resolveModelId } from './resolveModel.ts'
import { DinghyError } from '@dinghy/cli'
import Debug from 'debug'

const debug = Debug('llmChat')

type ChatParams<S extends z.ZodType | undefined = undefined> = {
  systemPrompt?: string
  userPrompt: string
  outputSchema?: S
  modelId?: string
}

export async function chat(params: ChatParams<undefined>): Promise<string>
export async function chat<S extends z.ZodType>(
  params: ChatParams<S> & { outputSchema: S },
): Promise<z.infer<S>>
export async function chat(params: ChatParams<any>): Promise<any> {
  const id = params.modelId ?? resolveModelId()
  if (!id) {
    throw new DinghyError(
      'No LLM model configured. Set ANTHROPIC_API_KEY, OPENAI_API_KEY, DINGHY_LLM_BEDROCK_MODEL, or DINGHY_LLM_MODEL — or pass modelId explicitly.',
      'NO_LLM_MODEL_CONFIGURED',
    )
  }
  const model = createChatModel(id)
  const messages: { role: 'system' | 'user'; content: string }[] = []
  if (params.systemPrompt) {
    messages.push({ role: 'system', content: params.systemPrompt })
  }
  messages.push({ role: 'user', content: params.userPrompt })

  debug('invoking %s', id)
  debug('messages %O', messages)
  if (params.outputSchema) {
    const parsed = await model.withStructuredOutput(params.outputSchema)
      .invoke(messages)
    debug('response %O', parsed)
    return parsed
  }

  const reply = await model.invoke(messages)
  debug('response %O', reply)
  const raw = reply.content
  return typeof raw === 'string'
    ? raw
    : (raw as any[]).map((c) => c?.type === 'text' ? c.text : '').join('')
}
