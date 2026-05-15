<?php
declare(strict_types=1);

// Fastapi SDK utility: result_body

class FastapiResultBody
{
    public static function call(FastapiContext $ctx): ?FastapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
